import axios from 'axios';

export class GitApiAdapter {
  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }

  /*
  async post<T>(url: string, data: any): Promise<T> {
    //TODO: Add create logic
  }

  async patch<T>(url: string, data: any): Promise<T> {
    //TODO: Add patch logic
  }

  async delete<T>(url: string, data: any): Promise<T> {
    //TODO: Add delete logic
  }
  */
}
