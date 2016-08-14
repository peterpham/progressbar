import {DataManager} from 'datamanager';
import {ProgressBar} from 'progressbar';

DataManager.getData().then((data) => {
	
	const pb = new ProgressBar('#progressbar-app', data);

});