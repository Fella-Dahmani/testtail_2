"use client";
import React, { useState } from 'react';
// import { Button } from '@/tailed-ui/src/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/tailed-ui/src/components/ui/card'
// import {Input} from '@/tailed-ui/src/components/ui/input'
// import {Label} from '@/tailed-ui/src/components/ui/label'
// import { Alert, AlertTitle, AlertDescription } from '@/tailed-ui/src/components/ui/alert'

const HomePage: React.FC = () => {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with values');
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to My Page</h1>
{/* 
     <Card>
      <CardHeader >
        <CardTitle>Formulaire de renseignement</CardTitle>
        <CardDescription>Veuillez remplir ce formulaire</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
              <Label htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                variant="classic"
                value={name}
                onChange={(e)=>setName(e.target.value)}

              />
            </div>
            <div>
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                variant="classic"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div><div>
              <Label htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                variant="classic"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <Button variant="default" size="lg" type="submit">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card> */}

    </div>
  );
};

export default HomePage;
