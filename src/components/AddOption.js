import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault(); 
        // this prevents the default form submit, the default will refresh/reload the whole page
        
        const option = e.target.elements.option.value.trim(); 
        //e.target = form, grab elements of the form, get option and its value.
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return { error };
        // });
        // the code below works the same way as the lines above, the code below is the shorthand version
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption} >
                    <input className="add-option__input" type='text' name='option' />
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}

