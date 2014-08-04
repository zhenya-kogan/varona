<xsl:stylesheet version="1.1"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:param name="album" select="'hello'" />

    <xsl:template match="albums">
        <xsl:copy-of select="album[albumTitle/text() = $album]/additionalInfo"/>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

