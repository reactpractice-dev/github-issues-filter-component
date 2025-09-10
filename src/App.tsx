import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthorFilter from "./components/AuthorFilter";
import LabelFilter from "./components/LabelFilter";
import MilestoneFilter from "./components/MilestoneFilter";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold m-5">Github Issue filters</h1>
      <div className="flex gap-4 m-5">
        <AuthorFilter />
        <LabelFilter />
        <MilestoneFilter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
