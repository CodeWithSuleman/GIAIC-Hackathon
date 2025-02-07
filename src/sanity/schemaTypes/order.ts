
const orderSchema={
    name:"order",
    type:"document",
    title:"Order",
    fields:[
        {
            name:"firstName",
            type:"string",
            title:"First Name",
        },
        {
            name:"lastName",
            type:"string",
            title:"Last Name",
        },
        {
            name:"address",
            type:"string",
            title:"Address",
        },
        {
            name:"zipCode",
            type:"string",
            title:"ZipCode",
        },
        {
            name:"email",
            type:"string",
            title:"Email",
        },
        {
            name:"password",
            type:"string",
            title:"Password",
        },
        {
            name:"city",
            type:"string",
            title:"City",
        },
        {
            name:"phone",
            type:"string",
            title:"Phone",
        },
        {
            name:"cartItems",
            type:"array",
            title:"Cart Items",
            of:[{type: "reference", to : {type:"product"}}]
        },
        {
            name:"subTotal",
            type:"number",
            title:"Total",
        },
        {
            name:"status",
            type:"string",
            title:"Order Status",
            options:{
                list:[
                    {title:"Pending", value:"pending"},
                    {title:"Success", value:"success"},
                    {title:"Dispatch", value:"dispatch"},
                ],
                layout:'radio'
            },
            initialValue: "pending"
        }
    ]
};
export default orderSchema;