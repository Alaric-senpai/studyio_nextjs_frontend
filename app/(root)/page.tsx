import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Form from 'next/form'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";

export default function Home() {
  return (
    <>

    <div className="w-screen h-screen grid place-items-center  to-transparent">
      <Card className="w-11/12 md:w-1/4  text-white-100 bg-slate-900 hover:bg-slate-900 ">
        <CardHeader className="border-b-2 flex items-center  justify-center">
          <Link href={'/'} className="font-bold text-3xl italic ">
          StudyIO
          </Link>
          <CardDescription className="my-2 text-gray-900">
            LOGIN TO STUDYIO
          </CardDescription>
        </CardHeader>
        <CardContent>

          <Form action={'/teacher'}>

            <div className="flex flex-col gap-2 my-3">
              <label className="p-2">Email Address</label>
              <Input placeholder="enter email address" name="email" type="email" required />
            </div>
            <div className="flex flex-col gap-2 my-3">
              <label className="p-2">Password</label>
              <Input placeholder="password goes here" name="email" type="password" required />
            </div>

            <div className=" text-center">
              <Button type="submit" className="w-full h-12 mt-3 bg-base-100 hover:bg-base-200" >
                <LogInIcon /> 
                Login
              </Button>
            </div>
            
          </Form>


        </CardContent>

      </Card>
    </div>

    </>

  )
}
