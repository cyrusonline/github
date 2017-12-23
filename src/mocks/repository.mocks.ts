import {Repository} from '../models/repository.interface';
import {USER_LIST} from './user.mocks';

const repositoryList: Repository[]=[
    {
        name:'Ionic 3 Camera',
        description: 'This repository shows the camera',
        owner:USER_LIST[0]
    },
    {
        name:'Ionic 3 SMS',
        description: 'This repository shows the SMS',
        owner:USER_LIST[0]
    },
    {
        name:'Ionic 3 Geolocation',
        description: 'This repository shows the Geolocation',
        owner:USER_LIST[1]
    },
    {
        name:'Ionic 3 Vibration',
        description: 'This repository shows the Vibration',
        owner:USER_LIST[1]
    },
    
];

export const REPOSITORY_LIST = repositoryList