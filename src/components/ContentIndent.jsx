//import PropTypes from 'prop-types';

function ContentIndent({children}) {
    return (
        <section className="ml-36 mr-36">
            {children}
        </section>
    );
}

// ContentIndent.PropTypes = {
//     children: PropTypes.oneOfType([
//         PropTypes.arrayOf(PropTypes.element), 
//         PropTypes.element.isRequired
//     ]), 
// } 

export default ContentIndent;