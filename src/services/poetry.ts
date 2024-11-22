import { Poem } from "../types/poems";


const BASE_URL = "https://poetrydb.org/poemcount/20";

export const getApiContent = async <T>(type: Poem) => {
  const response = await fetch(`${BASE_URL}${type}`);
  const data = await response.json();
  return data as T[];
};

