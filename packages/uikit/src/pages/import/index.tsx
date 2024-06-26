import { AuthState } from '@tonkeeper/core/dist/entries/password';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ImportRoute } from '../../libs/routes';
import Create from './Create';
import Import from './Import';
import { PairKeystone } from './Keystone';
import { PairLedger } from './Ledger';
import { PairSigner } from './Signer';

const ImportRouter: FC<{ listOfAuth: AuthState['kind'][] }> = ({ listOfAuth }) => {
    return (
        <Routes>
            <Route path={ImportRoute.create} element={<Create listOfAuth={listOfAuth} />} />
            <Route path={ImportRoute.import} element={<Import listOfAuth={listOfAuth} />} />
            <Route path={ImportRoute.signer} element={<PairSigner />} />
            <Route path={ImportRoute.keystone} element={<PairKeystone />} />
            <Route path={ImportRoute.ledger} element={<PairLedger />} />
        </Routes>
    );
};

export default ImportRouter;
