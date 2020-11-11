import { combineReducers } from 'redux'

const { selectSong } = require("../actions");

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarana', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectSong;
};

export default combineReducers({
   songs: songsReducer,
   selectSong: selectedSongReducer 
});