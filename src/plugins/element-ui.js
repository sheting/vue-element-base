import {
    Alert,
    Card,
    Container,
    Header,
    Aside,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Main,
    Input,
    Button,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Table,
    TableColumn,
    Form,
    FormItem,
    RadioGroup,
    RadioButton,
    Select,
    Option,
    Pagination,
    Tooltip,
    Tag,
    Icon,
    Row,
    Col,
    Message,
    MessageBox,
    Upload,
    Loading
  } from 'element-ui'
  
  export default {
    install (Vue) {
      Vue.use(Alert)
      Vue.use(Card)
      Vue.use(Container)
      Vue.use(Header)
      Vue.use(Aside)
      Vue.use(Dropdown)
      Vue.use(DropdownMenu)
      Vue.use(DropdownItem)
      Vue.use(Main)
      Vue.use(Input)
      Vue.use(Button)
      Vue.use(Menu)
      Vue.use(Submenu)
      Vue.use(MenuItem)
      Vue.use(MenuItemGroup)
      Vue.use(Table)
      Vue.use(TableColumn)
      Vue.use(Form)
      Vue.use(FormItem)
      Vue.use(RadioGroup)
      Vue.use(RadioButton)
      Vue.use(Select)
      Vue.use(Option)
      Vue.use(Pagination)
      Vue.use(Tooltip)
      Vue.use(Tag)
      Vue.use(Icon)
      Vue.use(Row)
      Vue.use(Col)
      Vue.use(Upload)
      Vue.use(Loading)
      Vue.prototype.$message = Message
      Vue.prototype.$alert = MessageBox.alert
      Vue.prototype.$confirm = MessageBox.confirm
    }
  }