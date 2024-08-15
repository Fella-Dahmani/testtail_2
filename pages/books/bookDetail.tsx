import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

import { Label } from "../../components/ui/label";

interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  publication_year: number;
}

const BooksDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) {
      const fetchBook = async () => {
        try {
          const response = await axios.get<Book>(
            `http://localhost:3000/books/${id}`
          );
          setBook(response.data);
        } catch (error) {
          console.log("Erreur lors de la récupération du livre",error);
          setError("Erreur lors de la récupération du livre");
        } finally {
          setLoading(false);
        }
      };

      fetchBook();
    }
  }, [id]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Livre non trouvé</p>;
  }

  return (
      <Card>
        <CardHeader>
          <CardTitle>Title: {book.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{book.description}</CardDescription>
          <Label>{book.author}</Label>
          <Label>{book.publication_year}</Label>
        </CardContent>
      </Card>

  );
};

export default BooksDetail;
