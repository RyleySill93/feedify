import { RECEIVE_CHANNELS } from '../actions/ChannelActions';

export default (state = [], action) => {
  switch(action.type) {
    case RECEIVE_CHANNELS:
      return action.allChannels.data.sources;
    default:
      return state;
  }
};
