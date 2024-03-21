import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddInvoice from './components/AddInvoice';
import ShowInvoice from './components/ShowInvoice';
import ShowGraph from './components/ShowGraph';

function App() {
    return (
        <div className='w-screen overflow-x-hidden'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/add-invoice' element={<AddInvoice />} />
                    <Route path='/show-invoice' element={<ShowInvoice />} />
                    <Route path='/show-graph' element={<ShowGraph />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
