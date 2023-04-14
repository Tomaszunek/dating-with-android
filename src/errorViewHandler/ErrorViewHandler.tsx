import { ERRORS } from "~/server/api/errorCodes";
import { ErrorPage } from "./ErrorPage,";

type ErrorViewHandlerProps = {
  errorMessage: string;
};

export const ErrorViewHandler = ({ errorMessage }: ErrorViewHandlerProps) => {
  switch (errorMessage) {
    case ERRORS.UNAUTHORIZED:
      return <ErrorPage errorMessage="User unauthorized" />;

    default:
      break;
  }
  return <ErrorPage errorMessage="Unknown error" />;
};
