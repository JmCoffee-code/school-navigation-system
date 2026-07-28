const API_BASE_URL = "http://localhost:5000";

class ApiClient {

   async get<T>(endpoint: string): Promise<T> {

      const response = await fetch(
         `${API_BASE_URL}${endpoint}`
      );

      if (!response.ok) {

         throw new Error(
            `GET ${endpoint} failed`
         );

      }

      return response.json();

   }

   async post<T>(
      endpoint: string,
      body: unknown
   ): Promise<T> {

      const response = await fetch(
         `${API_BASE_URL}${endpoint}`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         }
      );

      if (!response.ok) {

         throw new Error(
            `POST ${endpoint} failed`
         );

      }

      return response.json();

   }

   async put<T>(
      endpoint: string,
      body: unknown
   ): Promise<T> {

      const response = await fetch(
         `${API_BASE_URL}${endpoint}`,
         {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         }
      );

      if (!response.ok) {

         throw new Error(
            `PUT ${endpoint} failed`
         );

      }

      return response.json();

   }

   async delete(
      endpoint: string
   ): Promise<void> {

      const response = await fetch(
         `${API_BASE_URL}${endpoint}`,
         {
            method: "DELETE",
         }
      );

      if (!response.ok) {

         throw new Error(
            `DELETE ${endpoint} failed`
         );

      }

   }

}

const api = new ApiClient();

export default api;