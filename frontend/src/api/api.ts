const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const processText = async (text: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/processText`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if(!response.ok) {
            throw new Error('HTTP request failed for text upload');
        }
        const data = await response.json();
        
        const diseaseNames = data.response.map((item: { name: string }) => 
            item.name.replace(/[*\s]+/, "").trim()  // Remove asterisks & trim spaces
          );
      
        return diseaseNames;
    } catch (error) {
        console.error('Error processing text:', error);
        return { processed_text: 'Error processing text' };
    }
}

export const processFile = async(file: File) => {
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_BASE_URL}/processFile`, {
            method: 'POST',
            body: formData,
        })

        if (!response.ok) {
            throw new Error('HTTP request failed for file upload');
        }
        const data = await response.json();

        const diseaseNames = data.response.map((item: { name: string }) => 
            item.name.replace(/[*\s]+/, "").trim()  // Remove asterisks & trim spaces
        );
      
        return diseaseNames;
    } catch (error) {
        console.error('Error processing file:', error);
        return { processed_text: 'Error processing file' };
    }
}