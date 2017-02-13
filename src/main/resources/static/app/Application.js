/**
 * Created by NAPatel on 13-Feb-17.
 */
Ext.define('MyApp.Application', {
    name: 'MyApp',
    extend: 'Ext.app.Application',
    launch: function () {
        var welcomeMessage = {
            html: '<h1>Welcome to the Weather App</h1>'
        };

        var buttonHeading = {
           html: '<h4>Click on the following options to perform the associated operations with them</h4>'
        };

        globals.weatherPoint = Ext.define('WeatherPoint', {
            extend: 'Ext.data.Model',
            fields: ['temperature', 'date']
        });

        globals.store = Ext.create('Ext.data.Store', {
            model: 'WeatherPoint',
            data: [
                {temperature: 58, date: new Date(2011, 0, 8)},
                {temperature: 63, date: new Date(2011, 0, 9)},
                {temperature: 73, date: new Date(2011, 0, 10)},
                {temperature: 78, date: new Date(2011, 0, 11)},
                {temperature: 81, date: new Date(2011, 0, 12)},
                {temperature: 61, date: new Date(2011, 0, 13)},
                {temperature: 23, date: new Date(2011, 0, 14)},
                {temperature: 54, date: new Date(2011, 0, 15)},
                {temperature: 90, date: new Date(2011, 0, 16)},
                {temperature: 56, date: new Date(2011, 0, 17)}
            ]
        });

        globals.viewport = Ext.create('Ext.container.Viewport', {
            layout: 'auto'
        });

        var add = Ext.create('Ext.Button', {
            text    : 'Add Record(s)',
            handler: function() {
                window.location.assign("http://localhost:8080/AddRecord.html");
                console.log("Button Clicked");
            }
        });

        var update = Ext.create('Ext.Button', {
            text    : 'Update Record(s)',
            handler: function() {
                window.location.assign("http://localhost:8080/UpdateRecord.html")
            }
        });

        var del = Ext.create('Ext.Button', {
            text    : 'Delete Record(s)',
            handler: function() {
                window.location.assign("http://localhost:8080/DeleteRecord.html");
            }
        });

        var read = Ext.create('Ext.Button', {
            text    : 'Fetch Records',
            handler: function() {
                window.location.assign("http://localhost:8080/ReadAllRecords.html");
            }
        });
        globals.viewport.add(welcomeMessage);
        globals.viewport.add(buttonHeading);
        globals.viewport.add(add);
        globals.viewport.add(update);
        globals.viewport.add(del);
        globals.viewport.add(read);
    }
});


/*
Ext.create('Ext.form.Panel', {
    title: 'Add Data Form',
    bodyPadding: 5,
    width: 350,
    cls: 'form',

    //The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'fit',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        cls: 'form-country',
        fieldLabel: 'Country',
        name: 'country',
        allowBlank: false
    }, {
        fieldLabel: 'Month',
        cls: 'form-month',
        name: 'month',
        allowBlank: false
    }, {
        fieldLabel: 'Date',
        cls: 'form-date',
        name: 'date',
        xtype: 'datefield',
        maxValue: new Date(),
        allowBlank: false
    }, {
        fieldLabel: 'Temperature',
        cls: 'form-temp',
        name: 'temp',
        xtype: 'numberfield',
        value: 30,
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        cls: 'reset-button'
        /!*,
         handler: function() {
         this.up('form').getForm().reset();
         }*!/
    }, {
        text: 'Add',
        cls: 'submit-button',
        formBind: true, //only enabled once the form is valid
        disabled: true
        /!*,
         handler: function() {
         var form = this.up('form').getForm();
         if (form.isValid()) {
         form.submit({
         success: function(form, action) {
         Ext.Msg.alert('Success', action.result.msg);
         },
         failure: function(form, action) {
         Ext.Msg.alert('Failed', action.result.msg);
         }
         });
         }
         }*!/
    }],
    renderTo: viewport
});

Ext.create('Ext.form.Panel', {
    title: 'Update Data Form',
    bodyPadding: 5,
    width: 350,
    cls: 'form',

    //The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        cls: 'form-country',
        fieldLabel: 'Country',
        name: 'country',
        allowBlank: false
    }, {
        fieldLabel: 'Month',
        cls: 'form-month',
        name: 'month',
        allowBlank: false
    }, {
        fieldLabel: 'Date',
        cls: 'form-date',
        name: 'date',
        xtype: 'datefield',
        maxValue: new Date(),
        allowBlank: false
    }, {
        fieldLabel: 'Temperature',
        cls: 'form-temp',
        name: 'temp',
        xtype: 'numberfield',
        value: 30,
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        cls: 'reset-button'
        /!*,
         handler: function() {
         this.up('form').getForm().reset();
         }*!/
    }, {
        text: 'Update',
        cls: 'submit-button',
        formBind: true, //only enabled once the form is valid
        disabled: true
        /!*,
         handler: function() {
         var form = this.up('form').getForm();
         if (form.isValid()) {
         form.submit({
         success: function(form, action) {
         Ext.Msg.alert('Success', action.result.msg);
         },
         failure: function(form, action) {
         Ext.Msg.alert('Failed', action.result.msg);
         }
         });
         }
         }*!/
    }],
    renderTo: viewport
});

Ext.create('Ext.form.Panel', {
    title: 'Add Data Form',
    bodyPadding: 5,
    width: 350,
    cls: 'form',

    //The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        cls: 'form-country',
        fieldLabel: 'Country',
        name: 'country',
        allowBlank: false
    },{
        fieldLabel: 'Month',
        cls: 'form-month',
        name: 'month',
        allowBlank: false
    }, {
        fieldLabel: 'Date',
        cls: 'form-date',
        name: 'date',
        xtype: 'datefield',
        maxValue: new Date(),
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Submit',
        cls: 'submit-button',
        formBind: true, //only enabled once the form is valid
        disabled: true/!*,
         handler: function() {
         var form = this.up('form').getForm();
         if (form.isValid()) {
         form.submit({
         success: function(form, action) {
         Ext.Msg.alert('Success', action.result.msg);
         },
         failure: function(form, action) {
         Ext.Msg.alert('Failed', action.result.msg);
         }
         });
         }
         }*!/
    }],
    renderTo: viewport
});

Ext.create('Ext.form.Panel', {
    title: 'Add Data Form',
    bodyPadding: 5,
    width: 350,
    cls: 'form',

    //The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        cls: 'form-country',
        fieldLabel: 'Country',
        name: 'country',
        allowBlank: false
    },{
        fieldLabel: 'Month',
        cls: 'form-month',
        name: 'month',
        allowBlank: false
    }, {
        fieldLabel: 'Date',
        cls: 'form-date',
        name: 'date',
        xtype: 'datefield',
        maxValue: new Date(),
        allowBlank: false
    }],

    buttons: [{
        text: 'Submit',
        cls: 'submit-button',
        formBind: true, //only enabled once the form is valid
        disabled: true/!*,
         handler: function() {
         var form = this.up('form').getForm();
         if (form.isValid()) {
         form.submit({
         success: function(form, action) {
         Ext.Msg.alert('Success', action.result.msg);
         },
         failure: function(form, action) {
         Ext.Msg.alert('Failed', action.result.msg);
         }
         });
         }
         }*!/
    }],
    renderTo: viewport
});

Ext.define('WeatherData', {
    extend: 'Ext.data.Model',
    fields: ['country', 'month', 'date', 'temperature']
});

var store2 = Ext.create('Ext.data.Store', {
    model: 'WeatherData',
    data: [
        {country: 'India', month: 'Jan', temperature: 58, date: new Date(2011, 0, 8)},
        {country: 'India', month: 'Jan', temperature: 63, date: new Date(2011, 0, 9)},
        {country: 'India', month: 'Jan', temperature: 73, date: new Date(2011, 0, 10)},
        {country: 'India', month: 'Jan', temperature: 78, date: new Date(2011, 0, 11)},
        {country: 'India', month: 'Jan', temperature: 81, date: new Date(2011, 0, 12)},
        {country: 'India', month: 'Jan', temperature: 61, date: new Date(2011, 0, 13)},
        {country: 'India', month: 'Jan', temperature: 23, date: new Date(2011, 0, 14)},
        {country: 'India', month: 'Jan', temperature: 54, date: new Date(2011, 0, 15)},
        {country: 'India', month: 'Jan', temperature: 90, date: new Date(2011, 0, 16)},
        {country: 'India', month: 'Jan', temperature: 56, date: new Date(2011, 0, 17)}
    ]
});

Ext.create('Ext.grid.Panel', {
    cls: 'grid',
    title: 'Database Data',
    store: store2,
    columns: [
        {text: 'Country', dataIndex: 'country'},
        {text: 'Month', dataIndex: 'month'},
        {text: 'Date', dataIndex: 'date'},
        {text: 'Temperature', dataIndex: 'temperature'}
    ],
    height: 200,
    width: 400,
    renderTo: viewport
});

Ext.define('WeatherPoint', {
    extend: 'Ext.data.Model',
    fields: ['temperature', 'date']
});

var store = Ext.create('Ext.data.Store', {
    model: 'WeatherPoint',
    data: [
        {temperature: 58, date: new Date(2011, 0, 8)},
        {temperature: 63, date: new Date(2011, 0, 9)},
        {temperature: 73, date: new Date(2011, 0, 10)},
        {temperature: 78, date: new Date(2011, 0, 11)},
        {temperature: 81, date: new Date(2011, 0, 12)},
        {temperature: 61, date: new Date(2011, 0, 13)},
        {temperature: 23, date: new Date(2011, 0, 14)},
        {temperature: 54, date: new Date(2011, 0, 15)},
        {temperature: 90, date: new Date(2011, 0, 16)},
        {temperature: 56, date: new Date(2011, 0, 17)}
    ]
});

Ext.create('Ext.Button', {
    cls: 'country',
    text: 'Country',
    renderTo: viewport,
    arrowAlign: 'right',
    menu: [
        {text: 'India'},
        {text: 'China'},
        {text: 'Bhutan'},
        {text: 'Nepal'}
    ]
});

Ext.create('Ext.chart.Chart', {
    cls: 'chart',
    renderTo: viewport,
    width: 400,
    height: 300,
    store: store,
    axes: [
        {
            title: 'Temperature',
            type: 'Numeric',
            position: 'left',
            fields: ['temperature'],
            minimum: 0,
            maximum: 100
        },
        {
            title: 'Date',
            type: 'Time',
            position: 'bottom',
            fields: ['date'],
            dateFormat: 'd-m-y'
        }
    ],
    series: [
        {
            type: 'column',
            xField: 'date',
            yField: 'temperature'
        }
    ]
});

Ext.create('Ext.Button', {
    cls: 'month',
    text: 'Month',
    renderTo: viewport,
    arrowAlign: 'right',
    menu: [
        {text: 'January'}, {text: 'February'}, {text: 'March'}, {text: 'April'},
        {text: 'May'}, {text: 'June'}, {text: 'July'}, {text: 'August'},
        {text: 'September'}, {text: 'October'}, {text: 'November'}, {text: 'December'}
    ]
});*/
