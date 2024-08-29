import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Details } from './pages/Details';
import { DefaultLayout } from './DefaultLayout';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/details" element={<Details/>}/>
            </Route>
        </Routes>
    );
}