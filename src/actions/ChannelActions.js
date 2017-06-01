export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
import { getChannels } from '../util/ChannelApiUtil';

export const fetchChannels = () => dispatch => {
  getChannels()
    .then(channels => {
      dispatch(receiveChannels(channels));
    });
};

export const receiveChannels = (allChannels) => ({
  type: RECEIVE_CHANNELS,
  allChannels
});
