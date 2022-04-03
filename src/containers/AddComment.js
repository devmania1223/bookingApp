import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPropertyComment} from "../redux/comments/actions";
import Add from "../components/Property/Comments/Add";
import Loading from "../components/Common/Loading";

const AddComment = ({id}) => {
    const isAdding = useSelector(state => state.comments.isAdding);
    const {token} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const submit = (text) => {
      dispatch(addPropertyComment(token, id, text));
    };
    if(isAdding){
        return <Loading message={'Your comment is being added...'} />
    }
    return (
        <Add submit={submit}/>
    );
};

export default AddComment;
