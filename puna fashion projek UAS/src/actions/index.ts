import { redirect } from "react-router-dom";


interface SearchActionRequest {
  request: {
    formData: () => Promise<FormData>;
  };
}
export const searchAction = async ({ request }: SearchActionRequest) => {
  // mendapatkan data formulir
  const formData = await request.formData();
  // mengonversi data formulir menjadi objek untuk memudahkan akses
  const data = Object.fromEntries(formData);

  return redirect(`/search?query=${data?.searchInput || ""}`);
};


 