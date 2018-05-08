import {hello} from './components/default';

hello();

if(module['hot']) {
    module['hot'].accept();
}