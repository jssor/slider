/// <reference path="../js/jssor.js" />
/// <reference path="../js/jssor.dialog.js" />

var $JssorRegexValidator$ = window.$JssorRegexValidator$ = function (regExp, errorMessage) {
    ///	<summary>
    ///		Regulare express validator.
    ///	</summary>
    ///	<param name="regExp" type="RegExp">
    ///		The regular expression to validate input
    ///	</param>
    ///	<param name="errorMessage" type="String">
    ///		Error message to return on validation error.
    ///	</param>
    var _This = this;

    _This.$ErrorMessage = errorMessage;

    _This.$Validate = function (input) {
        ///	<param name="input" type="String">
        ///		A string value to validate.
        ///	</param>

        return regExp.test(input);
    };
};

var $JssorMatchValidator$ = window.$JssorMatchValidator$ = function (errorMessage) {
    var _This = this;

    var _Original;

    _This.$ErrorMessage = errorMessage;

    _This.$Original = function (original) {
        if (original == undefined)
            return _Original;

        _Original = original;
    };

    _This.$Validate = function (input) {
        return _Original == input;
    };
};

var $JssorNumberConverter$ = window.$JssorNumberConverter$ =  {

    $ToString: function (value) {
        return "" + value;
    },

    $FromString: $Jssor$.$ParseFloat
};

var $JssorEditor$ = window.$JssorEditor$ = function (elmt, options) {
    var _This = this;
    var _Base = $Jssor$.$Inherit(_This, $JssorObject$);

    var _Value;
    var _DefaultValue;

    var _Converter;
    var _Validators;
    var _Validations;

    var _BackElement;
    var _DefaultElement;
    var _InputElement;

    var EVT_VALUECHANGE = 21;

    function ValueChangeEventHandler() {
        _This.$CheckUpdate();
    }

    function MouseOverEventHandler(event) {
        //to do display message if needed
    }

    _This.$Elmt = function () {
        return elmt;
    };

    _This.$BackElement = function () {
        if (!_BackElement) {
            _BackElement = $Jssor$.$CreateDivElement();
            $Jssor$.$SetClassName(_BackElement, "jeInner");
        }

        return _BackElement;
    };

    _This.$DefaultElement = function () {
        if (!_DefaultElement) {
            _DefaultElement = $Jssor$.$CreateDivElement();
            $Jssor$.$SetClassName(_DefaultElement, "jeDefault");
        }

        return _BackElement;
    };

    _This.$InputElement = function () {
        ///	<summary>
        ///		[abstract] create input element.
        ///	</summary>
        $JssorDebug$.$C_AbstractMethod();
    };

    _This.$Value = function (value) {
        if (value == undefined)
            return _Value;

        _Value = _Converter.$FromString(value);
    };

    _This.$DefaultValue = function (value) {
        if (value == undefined)
            return _DefaultValue;

        _DefaultValue = value;
    };

    _This.$Converter = function () {
        return _Converter;
    };

    _This.$Validators = function () {
        return _Validators;
    };

    _This.$Validations = function () {
        return _Validations;
    };

    _This.$UpdateUI = function () {
        ///	<summary>
        ///		Validates input.
        ///	</summary>

        //to do check value change
    };

    _This.$CheckUpdate = function () {
        //to do check value change

        _This.$TriggerEvent(EVT_VALUECHANGE);   //new value, old value
    };

    _This.$Construct = function () {
        elmt = $Jssor$.$GetElement(elmt);

        $Jssor$.$AppendChild(elmt, _This.$BackElement());
        $Jssor$.$AppendChildren(_BackElement, [_This.$DefaultElement(), _This.$InputElement()]);

        _Value = options.$Value;
        _DefaultValue = options.$DefaultValue;
        _Converter = options.$Converter || { $ToString: function (value) { return value; }, $FromString: function (value) { return value; } };
        _Validators = options.$Validators;

        _This.$Listen(elmt, "valuechange", ValueChangeEventHandler);
        _This.$Listen(elmt, "mouseover", MouseOverEventHandler);
    };

    $JssorDebug$.$C_AbstractClass(_This);
};

$JssorEditor$.$EVT_VALUECHANGE = 21;

var $JssorTextboxEditor$ = window.$JssorTextboxEditor$ = function (elmt, options) {
    ///	<param name="elmt" type="HTMLElement">
    ///		The element to show the dialog around
    ///	</param>
    ///	<param name="options" type="object" value="{ $Value: null, $DefaultValue: null, $Converter: null, $Validators: [] }">
    ///	</param>
    var _This = this;
    var _Base = $Jssor$.$Inherit(_This, $JssorEditor$, elmt, options);

    var _InputElement;

    function KeyPressEventHandler() {
        _This.$CheckUpdate();
    }

    _This.$InputElement = function () {
        _InputElement = _InputElement || $Jssor$.$CreateElement("input");

        return _InputElement;
    };

    _This.$Construct = function () {
        _Base.$Construct();

        _This.$Listen(elmt, "keypress", KeyPressEventHandler);
    };

    $Jssor$.$Construct(_This);
};

var $JssorSelectEditor$ = window.$JssorSelectEditor$ = function (elmt) {
};

var $JssorCheckboxEditor$ = window.$JssorCheckboxEditor$ = function (elmt) {
};

var $JssorRadioButtonEditor$ = window.$JssorRadioButtonEditor$ = function (elmt) {
};

var $JssorColorEditor$ = window.$JssorColorEditor$ = function (elmt) {
};