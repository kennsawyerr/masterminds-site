import { AlertCircle } from "lucide-react";
const NotFound = () => {
  return (
    <>
      <div>
        <AlertCircle/>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
};

export default NotFound;
