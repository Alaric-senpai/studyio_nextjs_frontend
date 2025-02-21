import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { LogInIcon } from "lucide-react"
import Form from "next/form"

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-gradient-to-br from-base-300 to-base-500 transition-all duration-500">
      <Card className="w-11/12 md:w-96 text-theming-800 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br dark:from-custom-green-jade dark:via-custom-green-midnight dark:to-transparent transition-all duration-3000 ease-linear" />
        <div
          className="absolute inset-0 bg-gradient-to-tr dark:from-custom-green-jade dark:via-custom-green-midnight dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-3000 ease-linear"
          style={{
            clipPath: "inset(0 100% 0 0)",
            animation: "reveal 3s linear forwards",
            animationPlayState: "paused",
          }}
        />
        <CardHeader className="border-b-2 border-base-200 text-center transition-colors duration-300 relative">
          <Link
            href={"/"}
            className="font-bold text-4xl text-base-600 transition-colors duration-300 hover:text-base-800"
          >
            StudyIO
          </Link>
          <CardDescription className="my-2 text-base-400 font-semibold transition-colors duration-300">
            LOGIN TO STUDYIO
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 relative">
          <Form action="/teacher">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email" className="text-sm font-medium text-base-600 transition-colors duration-300">
                Email Address
              </label>
              <Input
                id="email"
                placeholder="Enter email address"
                name="email"
                type="email"
                required
                className="border-school-blue-300 focus:border-school-blue-500 transition-all duration-300 focus:ring-2 focus:ring-school-blue-400 dark:text-school-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="password" className="text-sm font-medium text-base-600 transition-colors duration-300">
                Password
              </label>
              <Input
                id="password"
                placeholder="Enter your password"
                name="password"
                type="password"
                required
                className="border-school-blue-300 focus:border-school-blue-500 transition-all duration-300 focus:ring-2 focus:ring-school-blue-400 dark:text-school-blue-500"
              />
            </div>
            <Button
              type="submit"
              variant={"outline"}
              className="w-full h-12 bg-school-green-400 hover:bg-school-green-600 text-theming-100 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <LogInIcon className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Login
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="text-right w-full text-sm text-base-400 transition-colors duration-300 relative">
          © 2025 StudyIO Corporation
        </CardFooter>
      </Card>
    </div>
  )
}

