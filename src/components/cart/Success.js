import React, { Component } from 'react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';
import { emptyCart } from '../actions/StoreActions';

const mapDispatchToProps = (dispatch) => {
    return{
        emptyCart: () => {dispatch(emptyCart())}
    }
}

class Success extends Component {
    componentWillMount() {
        this.props.emptyCart()
    }

    render() { 
        return (
            <Styled.Section top="60px" bottom="40px">
                <Styled.Wrapper width="50%">
                    <Styled.Text size="2.2rem" align="center" margin="0 0 10px 0">Congratulations!</Styled.Text>
                    <Styled.Text align="center">
                        <p>Thank you for shopping with us today. You will receive a confirmation email with the details and status of your order shortly.</p>
                    </Styled.Text>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default connect (null, mapDispatchToProps) (Success);
