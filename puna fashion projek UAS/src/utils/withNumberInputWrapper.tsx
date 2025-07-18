

interface WithNumberInputWrapperProps {
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const WithNumberInputWrapper = (Component: any) => {
  return function (props: WithNumberInputWrapperProps) {
    return <Component {...props} />;
  };
};
export default WithNumberInputWrapper;
// input jumlah produk di halaman shop/cart