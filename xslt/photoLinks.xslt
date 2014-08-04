<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:template match="photoLink">
        <li> 
            <a href="{link}" target="_blank">
                <xsl:value-of select="description" />
            </a>
        </li>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

