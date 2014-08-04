<xsl:stylesheet version="1.1"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    >

    <xsl:output omit-xml-declaration="yes" method="xml" indent="yes" encoding="UTF-8" />

    <xsl:param name="project" select="'hello'" />

    <xsl:template match="musicians">
        <xsl:for-each select="musician[project/name/text() = $project]">
            <b>
                <xsl:choose>
                    <xsl:when test="link">
                        <a href="{link}" target="_blank"><xsl:value-of select="name" /></a>
                    </xsl:when>                    
                    <xsl:when test="not(link)">
                        <xsl:value-of select="name" />
                    </xsl:when>                    
                </xsl:choose>
            </b><br/>
            <xsl:for-each select="project[name/text() = $project]">
                &#8212; <xsl:value-of select="instrument" /><br/>
            </xsl:for-each>
        </xsl:for-each>
    </xsl:template>

    <xsl:template match="text()" />

</xsl:stylesheet>

