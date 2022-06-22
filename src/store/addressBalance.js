import axios from 'axios';
import { pathOr } from 'rambda';
import {
  FULFILLED, INIT, PENDING, REJECTED,
} from '../utils/constants';

const initState = {
  fetchState: INIT,
  balance: [],
};

export const state = () => ({
  ...initState,
});

export const mutations = {
  UPDATE_DATA(s, balance) {
    Object.assign(s, { balance });
  },
  CLEAR(s) {
    Object.assign(s, initState);
  },
  SET_STATE(s, fetchState) {
    Object.assign(s, { fetchState });
  },
};

export const getters = {
  data(s) {
    return pathOr([], ['data'], s.balance).map((row) => ({
      address: row.address,
      count: row.count,
      id: row.id,
      meta: {
        description: row.meta.description,
        image: row.meta.image,
        name: row.meta.name,
      },
    }));
  },
};

export const actions = {
  async fetch(ctx, address) {
    if (ctx.state.fetchState === PENDING) {
      return;
    }

    ctx.commit('SET_STATE', PENDING);

    try {
      const response = await axios.get(`https://dexart-bsc.108dev.space/api/v1/address/${address}/nft`);

      ctx.commit('UPDATE_DATA', response.data);
      ctx.commit('SET_STATE', FULFILLED);
    } catch (err) {
      ctx.commit('SET_STATE', REJECTED);
    }
  },
};

const addressBalance = {
  namespaced: true,
  state: state(),
  mutations,
  getters,
  actions,
};

export default addressBalance;
