
import os
from mod_python import psp
from mod_python import apache

def index(req):
    # The publisher will call this function as default,
    # make it same as home
    return home(req)

def home(req):
    return _any_page(req, 'varona')

def varona(req):
    return _any_page(req, 'varona')

def product(req):
    return _any_page(req, 'product')

def about(req):
    return _any_page(req, 'about')


def _any_page(req, name):
    """
    Construct a web page given a page name, which is a string identifier
    that is also passed to the _menu() function to highlight the current
    menu item, and is used to construct the filename for the page template.
    """

    html_tmpl = '%s.html' % name

    return psp.PSP(req, html_tmpl)

