type ErrorPageProps = {
  errorMessage: string;
};

export const ErrorPage = ({ errorMessage }: ErrorPageProps) => (
  <span>{errorMessage}</span>
);
