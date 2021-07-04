import { Broker } from '../broker';

export default {
  data() {
    return {
      entityName: ''
    }
  },
  created() {
    if (!!this.entityName && typeof this.entityName === 'string' && this.entityName.trim() !== '') {
      this.broker = new Broker(this.entityName);
    } else {
      console.warn('entityName不是一个有效字符串');
    }
  },
  methods: {
    /**
     * 创建数据
     * @param {Object} data
     */
    createData(data) {
      return this.broker.create(data);
    },
    /**
     * 删除数据
     * @param {String} id 实体id
     */
    deleteData(id) {
      return this.broker.delete(`${this.entityName}id=eq.${id}`);
    },
    /**
     * 更新数据
     * @param {Object} data 
     */
    async updateData(data) {
      const id = data[`${this.entityName}id`];
      return this.broker.update(data, `${this.entityName}id=eq.${id}`);
    },
    /**
     * 查询数据
     * @param {Array} conditions [{ name: 'id', operator: 'eq', value: '123123' }]
     */
    async getDataList(conditions) {
      const conditionStr = (conditions || []).map(item => `${item.name}=${item.operator}.${item.value}`).join('&');
      return this.broker.query(conditionStr);
    },
    /**
     * 查询数据
     * @param {String} id 
     * @returns 
     */
    async getData(id) {
      const result = await this.broker.query(`${this.entityName}id=eq.${id}`);
      if (result && Array.isArray(result) && result.length > 0) {
        return result[0];
      }
      return null;
    }
  }
}