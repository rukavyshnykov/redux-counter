
import { Counter } from '../features/Counter';
import { Settings } from '../features/Settings';
import { useAppSelector } from './hooks';

export type ModeType = 'counter' | 'edit'

const App = () => {

    const mode = useAppSelector(state => state.app.mode)

    return (
        <div className="App">
            {mode === 'counter' ? <Counter /> : <Settings />}
        </div>
    );
}

export default App;
