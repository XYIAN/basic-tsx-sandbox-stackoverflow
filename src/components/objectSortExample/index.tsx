import { ReactNode } from "react";

interface City {
  id: number;
  name: string;
  url: string;
}

export function SortAndGroupCitiesAlphabetically(
  city: City[]
): { key: string; list: string[] }[] {
  // Sort the cities alphabetically by name
  const sortedCities = city.sort((a, b) => a.name.localeCompare(b.name));

  // Group the cities by the first letter of their names
  const groupedCities: { [key: string]: string[] } = {};
  sortedCities.forEach((city) => {
    const firstLetter = city.name.charAt(0).toUpperCase();
    if (!groupedCities[firstLetter]) {
      groupedCities[firstLetter] = [];
    }
    groupedCities[firstLetter].push(city.name);
  });

  // Convert the grouped cities object into an array of objects with key and list
  const result: { key: string; list: string[] }[] = [];
  for (const key in groupedCities) {
    if (groupedCities.hasOwnProperty(key)) {
      result.push({ key, list: groupedCities[key] });
    }
  }

  return result;
}

export function generateHTMLList(
  result: { key: string; list: string[] }[]
): string {
  const htmlList: ReactNode[] = [];

  result.forEach((group) => {
    // Create the title (e.g., <h3>A</h3>)
    const title = <h3>${group.key}</h3>;

    // Create the list items (e.g., <li>Alabama</li>, <li>Arkansas</li>, ...)
    const listItems = group.list.map((item) => `<li>${item}</li>`);

    // Combine title and list items to form a complete section
    const section = (
      <>
        <h3>{title}</h3>
        <ul>${listItems.join("")}</ul>
      </>
    );

    // Add the section to the HTML list
    htmlList.push(section);
  });

  // Combine all sections to form the final HTML
  return htmlList.join("");
}
