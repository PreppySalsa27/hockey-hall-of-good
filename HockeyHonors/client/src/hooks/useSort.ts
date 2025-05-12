import { useState, useMemo } from "react";

interface SortConfig {
  key: string;
  direction: "asc" | "desc";
}

export function useSort<T>(items: T[], initialSortConfig: SortConfig) {
  const [sortConfig, setSortConfig] = useState<SortConfig>(initialSortConfig);

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof T];
        const bValue = b[sortConfig.key as keyof T];
        
        if (aValue === undefined || bValue === undefined) {
          return 0;
        }
        
        // Handle string comparison
        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        
        // Handle number comparison
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc"
            ? aValue - bValue
            : bValue - aValue;
        }
        
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  return { sortedItems, sortConfig, requestSort };
}
