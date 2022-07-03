import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </a>
            <a href={result.link} className="group-hover:underline decoration-blue-800">
              <h2 className="truncate text-xl font-medium text-blue-800">{result.title}</h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
