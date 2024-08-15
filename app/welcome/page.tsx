"use client";
import React, { useEffect, useState } from "react";
import Book from "@/components/global/Book";
import axios from "axios"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


const HomePage: React.FC = () => {
  interface Book{
    id: number;
    title: string;
    description: string;
    author: string;
    cover_image: string;
  }
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  const [titleSearch, setTitleSearch] = useState("");
  const [authorSearch, setAuthorSearch] = useState("");

  useEffect(()=>{
    const fetchBooks = async () =>{
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch(error){
        console.log("Erreur lors de chargement des livres", error);

        setError("Erreur lors de chargement des livres");
      } finally {
        setLoading(false);
      }
      
    };
    fetchBooks();
  }, []);

  if(loading){
    return <p>Chargement des livres .....</p>
  }
  if (error){
    return <p>{error}</p>
  }


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Page</h1>
        <div>
              <Label htmlFor="searchBytitle">
                Title
              </Label>
              <Input
                id="searchBytitle"
                type="text"
                placeholder="Search by title"
                variant="classic"
                value={titleSearch}
                onChange={(e)=>setTitleSearch(e.target.value)}

              />
            </div>
            <div>
              <Label htmlFor="author">
                Author
              </Label>
              <Input
                id="author"
                type="text"
                placeholder="Search by author"
                variant="classic"
                value={authorSearch}
                onChange={(e)=>setAuthorSearch(e.target.value)}
              />
            </div>
          
      <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">


      {books
      .filter((book) =>
        book.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
        book.author.toLowerCase().includes(authorSearch.toLowerCase())
      )
      .map((book) => (
        <Book key={book.id} id={book.id} title={book.title} description={book.description} author={book.author} btnTitle='Details' src={book.cover_image} />
      ))}
      </div>

      {/* <Card>
      <CardHeader >
        <CardTitle>Formulaire de renseignement</CardTitle>
        <CardDescription>Veuillez remplir ce formulaire</CardDescription>
      </CardHeader>
      <CardContent>
        
        </CardContent>
      </Card> */}
    </div>
  );
};

export default HomePage;
