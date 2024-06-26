import { IconButton } from '../../fields/IconButton';
import { RefreshIcon, RefreshIconAnimated } from '../../Icon';
import { useCalculatedSwap } from '../../../state/swap/useCalculatedSwap';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';

const IconButtonStyled = styled(IconButton)`
    padding: 10px;
    border: none;

    > svg {
        color: ${props => props.theme.iconSecondary};
    }

    transition: opacity 0.15s ease-in-out;

    &:hover {
        opacity: 0.64;
    }
`;

let isRefetchCalled = false;

export const SwapRefreshButton = () => {
    const REFETCH_INTERVAL = 15000;
    const { refetch, isFetching } = useCalculatedSwap();
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        isRefetchCalled = false;

        if (isFetching) {
            setIsCounting(false);
        } else {
            setIsCounting(true);

            const timeutId = setTimeout(() => {
                // prevent double refresh from possible two component instances
                if (isRefetchCalled) {
                    return;
                }

                refetch();
                isRefetchCalled = true;
            }, REFETCH_INTERVAL);

            return () => clearTimeout(timeutId);
        }
    }, [isFetching]);

    return (
        <IconButtonStyled transparent onClick={() => refetch()}>
            {isCounting ? <RefreshIconAnimated /> : <RefreshIcon />}
        </IconButtonStyled>
    );
};
