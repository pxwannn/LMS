import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useLoginUserMutation, useRegisterUserMutation } from "@/features/api/authApi";

const Login = () => {
  const [signupInput, setSignup] = useState({ name: "", email: "", password: "" });
  const [loginInput, setLogin] = useState({ email: "", password: "" });
  const [registerUser, { data: registerData, error: registerError, isLoading: registerIsLoading, isSuccess: registerIsSuccess }] = useRegisterUserMutation();
  const [loginUser, { data: loginData, error: loginError, isLoading: loginIsLoading, isSuccess: loginIsSuccess }] = useLoginUserMutation();
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignup({ ...signupInput, [name]: value });
    } else {
      setLogin({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
   const inputData  = type ==="signup"?signupInput:loginInput;
   const action = type==="signup"?registerUser:loginUser;
   await action(inputData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Tabs defaultValue="signup" className="w-full max-w-md">
        <TabsList className="mb-6">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="login">Log In</TabsTrigger>
        </TabsList>

        {/* Signup Tab */}
        <TabsContent value="signup">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Sign Up</CardTitle>
              <CardDescription>
                Create a new account by filling the form below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. Pawan"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Eg. pawan@gmail.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Enter password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full"disabled={registerIsLoading} onClick={() => handleRegistration("signup")}>
               {
                registerIsLoading?(
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Loading....
                    </>
                ):"Signup"
               }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Login Tab */}
        <TabsContent value="login">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Login</CardTitle>
              <CardDescription>Login to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Eg. pawan@gmail.com"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Enter password"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" disabled={loginIsLoading}onClick={() => handleRegistration("login")}>
                {
                  loginIsLoading?(
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Loading....
                    </>
                  ): "Login"
                }
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
