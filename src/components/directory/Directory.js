import React from 'react'
import MenuItems from '../menu-items/MenuItems'

class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            sections: [
                {title: 'hats'},
                {title: 'sneakers'},
                {title: 'accessories'},
                {title: 'womens'},
                {title: 'mens'}
            ]
        }
    }
    render(){
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id}) => (
                        <MenuItems key={id} title={title}/>
                    ))
                }
            </div>
        )}
}

export default Directory 