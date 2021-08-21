import { ActionType } from '../contants/action-type';
export const setAlbums = (albums)=>{
    return {
        type: ActionType.SET_ALBUMS,
        payload:albums,
    };
};

export const selectedAlbum = (album)=>{
    return {
        type: ActionType.SELECTED_ALBUM,
        payload:album,
    };
};