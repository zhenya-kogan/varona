<xsl:stylesheet version="1.1"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:param name="album" select="'hello'" />

    <xsl:template match="albums">
        <xsl:for-each select="album[albumTitle/text() = $album]/songs/song">
            <xsl:choose>
                <xsl:when test="camelCase">
                    <xsl:choose>
                        <xsl:when test="trackNumber = '01'">
                            <li class="toggleLink active" linkto="{camelCase}">
                                <xsl:value-of select="trackNumber" />. <xsl:value-of select="title" />
                            </li>
                        </xsl:when>
                        <xsl:when test="trackNumber != '01'">
                            <li class="toggleLink" linkto="{camelCase}">
                                <xsl:value-of select="trackNumber" />. <xsl:value-of select="title" />
                            </li>
                        </xsl:when>
                    </xsl:choose>
                </xsl:when>
                <xsl:when test="not(camelCase)">
                    <li class="separator">
                        <xsl:value-of select="title" />
                    </li>
                </xsl:when>
            </xsl:choose>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

