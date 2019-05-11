import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

const HeadCell = styled.th`
    padding: 1vmin 2vmin;
    text-align: left;
    font-weight: normal;
`;

const WidgetTableHeadCell = ({ children }: { children: ReactNode }) => <HeadCell>{children}</HeadCell>;

// WidgetTableHeadCell.propTypes = {
//     children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
// };

export default WidgetTableHeadCell;
