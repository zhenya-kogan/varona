<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:template match="review">
        <p>
            "<xsl:value-of select="quote" />"
        </p>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

