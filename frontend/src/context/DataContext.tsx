import React, { createContext, useState, useContext } from "react";

interface DataContextType {
  processedData: string[];
  setProcessedData: (data: string[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [processedData, setProcessedData] = useState<string[]>([]);

  return (
    <DataContext.Provider value={{ processedData, setProcessedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

