import React from 'react';
import { format} from "date-fns";

const NewsDate = () => {

    return (
        <div>
            <span>
            {format(new Date(),"EEEE, MMMM dd, yyyy")}
            </span>
        </div>
    );
};

export default NewsDate;