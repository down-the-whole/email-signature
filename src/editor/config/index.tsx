export class FormItem {
    type: string = 'text'
    name: string = ''
    value: any = null
    handleChange: Function = () => {}
    label: string = ''

    constructor(options: Partial<FormItem>) {
        Object.assign(this, options)

        if (!this.label) this.label = this.name.charAt(0).toUpperCase() + this.name.slice(1)
    }

    renderFormItem() {
        return (
            <label>
                {this.label}:
                &nbsp;
                <input
                    style={{
                        minWidth: '200px',
                    }}
                    type={this.type}
                    name={this.name}
                    value={this.value}
                    onChange={this.handleChange}
                />
            </label>
        )
    }
}


export default class EditorConfig {
    [s: string]: FormItem

    name = new FormItem({
        type: 'text',
        name: 'name',
    })

    title = new FormItem({
        type: 'text',
        name: 'title',
    })

    motto = new FormItem({
        type: 'text',
        name: 'motto',
    })

    phone = new FormItem({
        type: 'tel',
        name: 'phone',
    })

    email = new FormItem({
        type: 'email',
        name: 'email',
    })

    website = new FormItem({
        type: 'url',
        name: 'website',
    })
}
