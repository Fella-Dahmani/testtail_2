import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface BookProps {
    id: number;
    title : string;
    description: string;
    author: string;
    btnTitle: string;
    src: string;
}

const Book: React.FC<BookProps> = ({id, title,  description, author, btnTitle }) => {
    const router = useRouter();

    const detailsClick=()=>{
        router.push(`/books/bookDetail?id=${id}`);
        
    }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
        <CardDescription>{description}</CardDescription>
          <Label>{author}</Label>
        </CardContent>
        <Button onClick={detailsClick} variant='default' size='sm'>{btnTitle}</Button>

      </Card>
    </div>
  );
};

export default Book;
