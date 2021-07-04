import axios from 'axios';

axios.defaults.baseURL = process.env.SERVER_URL;

export class Broker {
  constructor(entityName) {
    this.entityName = entityName;
  }

  async create(data) {
    const result = await axios.post(this.entityName, data);
    if (result.status === '201') {
      return Promise.resolve(true);
    }
    return Promise.reject(result.statusText);
  }

  async update(data, condition) {
    const result = await axios.patch(`${this.entityName}?${condition}`, data);
    if (result.status === 204) {
      return Promise.resolve(true);
    }
    return Promise.reject(result.statusText);
  }

  async query(condition) {
    const result = await axios.get(`${this.entityName}?${condition}`);
    if (result.status === 200) {
      return Promise.resolve(result.data);
    }
    return Promise.reject(result.statusText);
  }

  async delete(condition) {
    const result = await axios.delete(`${this.entityName}?${condition}`);
    if (result.status === 204) {
      return Promise.resolve(true);
    }
    return Promise.reject(result.statusText);
  }
}