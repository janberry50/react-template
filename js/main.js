import {hello} from './components/default/default';

hello();

if(module['hot']) {
    module['hot'].accept();
}